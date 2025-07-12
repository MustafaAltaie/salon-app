import dbConnect from "../../../../lib/mongodb";
import Signup from "../../../../lib/models/signupModel";

export async function POST(req: Request) {
  await dbConnect();
  const data = await req.json();
  const newItem = new Signup(data);
  await newItem.save();
  return new Response(JSON.stringify(newItem), { status: 201 });
}

export async function GET() {
  await dbConnect();
  const items = await Signup.find({});
  return new Response(JSON.stringify(items), { status: 200 });
}

export async function PUT(req: Request) {
    await dbConnect();
    const updatedSignup = await req.json();
    await Signup.deleteMany({});
    const insertedSignup = await Signup.insertMany(updatedSignup);
    return new Response(JSON.stringify(insertedSignup), { status: 200 });
}