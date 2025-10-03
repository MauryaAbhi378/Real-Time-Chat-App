import mongoose, { Document } from "mongoose";
export interface UserType extends Document {
    name: string;
    email: string;
}
export declare const User: mongoose.Model<UserType, {}, {}, {}, mongoose.Document<unknown, {}, UserType, {}, {}> & UserType & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=user.d.ts.map