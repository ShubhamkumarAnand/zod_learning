import { z } from 'zod';

const studentSchema = z
	.object({
		userName: z.string().min(5),
		age: z.number().gt(0),
		birthday: z.date(),
		isProgrammer: z.boolean().default(false),
		gender: z.enum(['Male', 'Female', 'Other']),
		friends: z.array(z.string()).nonempty(),
		coords: z.tuple([z.number(), z.string()]).rest(z.number()),
		id: z.discriminatedUnion('status', [
			z.object({ status: z.literal('success'), data: z.string() }),
			z.object({ status: z.literal('Failure'), data: z.instanceof(Error) }),
		]),
	})
	.extend({ isDoingImpressive: z.boolean().default(true) })
	.strict();

// partial() makes Everything Optional
// passthrough() makes everything pass through the additional fields
type Student = z.infer<typeof studentSchema>;

const student1 = {
	userName: 'imskanand',
	age: 22,
	birthday: new Date(),
	isProgrammer: true,
	gender: 'Male',
	friends: ['aston', 'jet', 'money'],
	coords: [2, 'one', 7, 5, 4, 6],
	id: { status: 'success', data: 'Hello' },
};

console.log(studentSchema.safeParse(student1).success);
console.log(studentSchema.safeParse(student1));

// object type
console.log(studentSchema.shape);
