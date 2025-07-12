import { model, models, Schema } from 'mongoose';
import { UserProps } from '../../types/User';

const signUpSchema = new Schema<UserProps>({
    username: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    image: { type: String },
    password: { type: String, required: true },
});

const Signup = models.Signup || model('Signup', signUpSchema);
export default Signup;