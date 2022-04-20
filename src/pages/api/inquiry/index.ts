// import { prisma } from '../../server/clients/prisma';
// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'POST') {
//     try {
//       const { body } = req;
//       const star = await prisma.star.create({ data: JSON.parse(body) });

//       return res.status(200).json(star);
//     } catch (error) {
//       return res.status(422).json(error);
//     }
//   } else if (req.method === 'GET') {
//     try {
//       const star = await prisma.star.findMany({});

//       return res.status(200).json(star);
//     } catch (error) {
//       return res.status(422).json(error);
//     }
//   }

//   res.end();
// };

import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await createInquiry(req, res);
  } else {
    return res.status(405).json({ message: 'Method not allowed', success: false });
  }
}

async function createInquiry(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  try {
    const newEntry = await prisma.inquiry.create({
      data: {
        name: body.firstName,
        email: body.email,
        subject: body.subject,
        message: body.message,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error creating question', success: false });
  }
}
