import { Be_Vietnam_Pro } from 'next/font/google';
import React from 'react';
import async from '../../careers/page';
import { useRouter } from 'next/navigation';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MdDelete, MdEdit } from 'react-icons/md';

const beVietnamPro700 = Be_Vietnam_Pro({
    weight: '700',
    subsets: ['latin']
})

const beVietnamPro600 = Be_Vietnam_Pro({
    weight: '600',
    subsets: ['latin']
})

const beVietnamPro500 = Be_Vietnam_Pro({
    weight: '500',
    subsets: ['latin']
})


const beVietnamPro400 = Be_Vietnam_Pro({
    weight: '400',
    subsets: ['latin']
})

const beVietnamPro300 = Be_Vietnam_Pro({
    weight: '300',
    subsets: ['latin']
})
const beVietnamPro600Italic = Be_Vietnam_Pro({
    weight: '600',
    style: 'italic',
    subsets: ['latin']
})

async function Panel({ params }: { params: { id: number } }) {
    return (
        <div className="w-full h-full">
            <div className={beVietnamPro600.className + ' relative pt-5 px-4 md:px-52 flex flex-col justify-center items-center'}>

                <div className='w-full flex justify-end py-4'>
                    <a href='/blogs/panel/create' className='cursor-pointer px-10 py-3 flex justify-center items-center border-4 rounded-xl
                     border-[#0656FE] hover:bg-[#0656FE] hover:text-white transition-all '>
                        Create a Blog
                    </a>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="md:w-[100px]">Id</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Created At</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className={beVietnamPro400.className}>
                        <TableRow>
                            <TableCell className="font-medium">1</TableCell>
                            <TableCell>Nithin Nadagouda</TableCell>
                            <TableCell className='truncate'>Nvelop - The origin story</TableCell>
                            <TableCell className='md:text-base'>September 4, 2024</TableCell>
                            <TableCell className="text-right">
                                <div className='flex justify-end space-x-2'>
                                    <div className='flex justify-center items-center w-8 h-8 bg-[#0656FE] text-white text-xl rounded-lg hover:text-black transition-all'>
                                        <MdEdit />
                                    </div>
                                    <div className='flex justify-center items-center w-8 h-8 bg-red-600 text-white text-xl rounded-lg hover:text-black transition-all'>
                                        <MdDelete />
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="font-medium">2</TableCell>
                            <TableCell>Mikko Valorinta</TableCell>
                            <TableCell>AI-to-AI sourcing</TableCell>
                            <TableCell className='md:text-base'>September 4, 2024</TableCell>
                            <TableCell className="text-right">
                                <div className='flex justify-end space-x-2'>
                                    <div className='flex justify-center items-center w-8 h-8 bg-[#0656FE] text-white text-xl rounded-lg hover:text-black transition-all'>
                                        <MdEdit />
                                    </div>
                                    <div className='flex justify-center items-center w-8 h-8 bg-red-600 text-white text-xl rounded-lg hover:text-black transition-all'>
                                        <MdDelete />
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default Panel;
