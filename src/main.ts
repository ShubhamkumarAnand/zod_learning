import { z } from 'zod';

const student = z.object({
	userName: z.string().min(5),
	age: z.number().gt(0),
	birthday: z.date(),
	isProgrammer: z.boolean().default(false),
	gender: z.enum(['Male', 'Female', 'Other']),
});

type Student = z.infer<typeof student>;

const student1 = {
	userName: 'imskanand',
	age: 22,
	birthday: new Date(),
	isProgrammer: true,
	gender: 'Male',
};

console.log(student.safeParse(student1));
