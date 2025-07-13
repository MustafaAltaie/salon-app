import dbConnect from "../../../../../../lib/mongodb";
import User from "../../../../../../lib/models/signupModel";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await dbConnect();
  const { id } = await params;

  try {
    const body = await req.json();
    const { newPassword } = body;

    if (!newPassword) {
      return new Response(JSON.stringify({ message: 'New password is required' }), { status: 400 });
    }

    const updated = await User.findByIdAndUpdate(id, { $set: { password: newPassword } }, { new: true });

    if (!updated)
      return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });

    return new Response(JSON.stringify({ message: 'Password updated successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error occurred:', error);
    return new Response(JSON.stringify({ error: 'Failed to update password' }), { status: 500 });
  }
}