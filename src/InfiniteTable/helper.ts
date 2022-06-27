
import { faker } from '@faker-js/faker';

export interface Row {
  id: string;
  email: string;
  title: string;
  firstName: string;
  lastName: string;
}

export function rowKeyGetter(row: Row) {
  return row.id;
}

export function createFakeRowObjectData(index: number): Row {
	return {
		id: `id_${index}`,
		email: faker.internet.email(),
		title: faker.name.prefix(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName()
	};
}

export function createRows(numberOfRows: number): Row[] {
	const rows: Row[] = [];

	for (let i = 0; i < numberOfRows; i++) {
		rows[i] = createFakeRowObjectData(i);
	}

	return rows;
}

export function isAtBottom({ currentTarget }: React.UIEvent<HTMLDivElement>): boolean {
	return currentTarget.scrollTop + 10 >= currentTarget.scrollHeight - currentTarget.clientHeight;
}

export function loadMoreRows(newRowsCount: number, length: number): Promise<Row[]> {
	return new Promise((resolve) => {
		const newRows: Row[] = [];

		for (let i = 0; i < newRowsCount; i++) {
			newRows[i] = createFakeRowObjectData(i + length);
		}

		setTimeout(() => resolve(newRows), 2000);
	});
}