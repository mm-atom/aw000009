import aw1 from '@mmstudio/aw000001';

/**
 * 移除某个key
 * @param mm 固定参数
 * @param key 键
 */
export default function remove(mm: aw1, key: string) {
	const local = mm.data.local as { [key: string]: unknown };
	if (local) {
		delete local[key];
	}
}
