import Image from 'next/image';
import { fetchItemCounts } from '@/app/lib/itemdata';
import { ItemCountTable } from '../../lib/definitions';


export default async function ItemsTable() {
	const items = await fetchItemCounts();

	return (
		<div className="mt-6 flow-root">
			<div className="inline-block min-w-full align-middle">
				<div className="rounded-lg bg-gray-50 p-2 md:pt-0">
					<div className="md:hidden">
						{items?.map((item) => (
							<div key={item.name} className="mb-2 w-full rounded-md bg-white p-4">
								<div className="flex items-center justify-between border-b pb-4">
									<div>
										<div className="mb-2 flex items-center">
											<p>{item.name}</p>
										</div>
										<p className="text-sm text-gray-500">{item.size}</p>
									</div>
									<div>
										item.available
									</div>
									<div>
										 item.total
									</div>
								</div>
							</div>
						))}
					</div>
					<table className="hidden min-w-full text-gray-900 md:table">
						<thead className="rounded-lg text-left text-sm font-normal">
							<tr>
								<th scope="col" className="px-4 py-5 font-medium sm:pl-6">
									Item
								</th>
								<th scope="col" className="px-3 py-5 font-medium">
									Size
								</th>
								<th scope="col" className="px-3 py-5 font-medium">
									Available
								</th>
								<th scope="col" className="px-3 py-5 font-medium">
									Total
								</th>
							</tr>
						</thead>
						<tbody className="bg-white">
							{items?.map((count) => (
								<tr
									key={count.name}
									className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
								>
									<td className="whitespace-nowrap py-3 pl-6 pr-3">
										<div className="flex items-center gap-3">
											<p>{count.name}</p>
										</div>
									</td>
									<td className="whitespace-nowrap px-3 py-3">
										{count.size}
									</td>
									<td className="whitespace-nowrap px-3 py-3">
										{count.available}
									</td>
									<td className="whitespace-nowrap px-3 py-3">
										{count.total}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
export function isLargeText(size: boolean) {
	console.log(size);
	if (size == true) {
		return 'Large item';
	}
	else {
		return 'Small item';
	}
}
