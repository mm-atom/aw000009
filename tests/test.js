import { expect } from 'chai';
import a from '../dist/index';

const mm = { data: { local: { key: '665' } } }
describe('local remove', async () => {
	it('remove local value', async () => {
		a(mm, 'key');
	});
});
