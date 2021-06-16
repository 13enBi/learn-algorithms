import { bind } from './bind';

describe('bind', () => {
	const obj = {
		say() {
			return this;
		},
	};

	const target = {};

	expect(bind(obj.say, target)()).toBe(target);
});
