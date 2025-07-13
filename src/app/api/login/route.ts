import dbConnect from "../../../../lib/mongodb";
import User from "../../../../lib/models/signupModel";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { email, password } = await req.json();

    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      return new Response(JSON.stringify({ error: "No account found" }), { status: 404 });
    }

    if (foundUser.password !== password) {
      return new Response(JSON.stringify({ error: "Wrong password" }), { status: 401 });
    }

    return new Response(JSON.stringify({
      id: foundUser._id,
      username: foundUser.username,
      email: foundUser.email,
      mobile: foundUser.mobile,
      image: foundUser.image,
      password: foundUser.password,
    }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}