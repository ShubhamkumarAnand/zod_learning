import { z } from 'zod';

const studentSchema = z
	.object({
		userName: z.string().min(5),
		age: z.number().gt(0),
		birthday: z.date(),
		isProgrammer: z.boolean().default(false),
		gender: z.enum(['Male', 'Female', 'Other']),
	})
	.extend({ isDoingImpressive: z.boolean().default(true) })
	.passthrough();

// partial() makes Everything Optional
// passthrough() makes everything pass through the additional fields
type Student = z.infer<typeof studentSchema>;

const student1 = {
	userName: 'imskanand',
	age: 22,
	birthday: new Date(),
	isProgrammer: true,
	gender: 'Male',
};

console.log(studentSchema.safeParse(student1).success);
console.log(studentSchema.safeParse(student1));

// object type
console.log(studentSchema.shape);
