import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { findAvailableTables } from "../../../../services/restaurant/findAvailableTables";

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  const {slug, day, time, partySize} = req.query as {slug: string; day: string; time: string; partySize: string;};

  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug
    },
    select: {
      tables: true,
      open_time: true,
      close_time: true,
    }
  })

  if(!restaurant){
    return res.status(400).json({
      errorMessage: "Restaurant not found."
    })
  }

  if (
    new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.open_time}`) ||
    new Date(`${day}T${time}`) > new Date(`${day}T${restaurant.close_time}`)
  ) {
    return res.status(400).json({
      errorMessage: "Restaurant is not open at that time",
    });
  }

  const searchTimesWithTables = await findAvailableTables({
    day,
    time,
    res,
    restaurant,
  });

  if (!searchTimesWithTables) {
    return res.status(400).json({
      errorMessage: "Invalid data provided",
    });
  }

  const searchTimeWithTables = searchTimesWithTables.find((t) => {
    return t.date.toISOString() === new Date(`${day}T${time}`).toISOString()
  })

  if(!searchTimeWithTables){
    return res.status(400).json({
      errorMessage: "No availability, cannot book",
    });
  }

  return res.json({
    searchTimeWithTables,
  });
}

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/reserve?day=2023-05-27&time=14:00:00.000Z&partySize=4