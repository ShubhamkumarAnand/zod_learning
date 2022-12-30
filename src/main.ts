import { z } from 'zod';

const student = z.object({
	userName: z.string().min(5),
	age: z.number().gt(0),
	birthday: z.date(),
	isProgrammer: z.boolean().optional(),
});

// type Student = z.infer<typeof student>;

const student1 = {
	userName: 'imskanand',
	age: 22,
	birthday: new Date(),
	isProgrammer: true,
};

console.log(student.safeParse(student1).success);
