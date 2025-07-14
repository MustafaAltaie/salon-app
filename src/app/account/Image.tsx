import React, { useState } from 'react';
import { PencilIcon, TrashIcon, UserIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { UserProps } from '../../../types/User';
import { useUploadImageMutation, useUpdateUserMutation, useDeleteImageMutation } from '../../../features/logins/loginApi';
import WaitingModal from '../reusableComponents/WaitingModal';

interface Props {
    editDel: boolean
    setEditDel: React.Dispatch<React.SetStateAction<boolean>>
    myDetails: UserProps
    setMyDetails: React.Dispatch<React.SetStateAction<UserProps>>
}

const ImageComponent = ({ editDel, setEditDel, myDetails, setMyDetails }: Props) => {
    const [file, setFile] = useState<File | null>(null);
    const [uploadImage] = useUploadImageMutation();
    const [updateUser] = useUpdateUserMutation();
    const [busy, setBusy] = useState(false);
    const [deleteImage] = useDeleteImageMutation();

    const handleUpload = async () => {
        if (!file) return;
        const ext = file.name.includes('.') ?
            file.name.substring(file.name.lastIndexOf('.')) :
            '.png';
        const newName = `${Date.now()}${ext}`;
        const renamedFile = new File([file], newName, {type: file?.type});
        const formData = new FormData();
        formData.append('image', renamedFile);
        const newObj: UserProps = {
            ...myDetails,
            image: newName
        }
        try {
            setBusy(true);
            await uploadImage(formData).unwrap();
            await updateUser({id: newObj.id!,  data: newObj}).unwrap();
            setFile(null);
            setMyDetails(newObj);
            localStorage.setItem('myAccount', JSON.stringify(newObj));
        } catch (err) {
            console.error(err);
            alert('Error saving file');
        } finally {
            setBusy(false);
        }
    }

    const handleDelete = async () => {
        try {
            setBusy(true);
            await deleteImage(myDetails.image!).unwrap();
            const newObj: UserProps = {
                ...myDetails,
                image: ''
            }
            await updateUser({id: newObj.id!,  data: newObj}).unwrap();
            localStorage.setItem('myAccount', JSON.stringify(newObj));
            setEditDel(false);
            setMyDetails(newObj);
        } catch (err) {
            console.error(err);
            alert('Error deleting image');
        } finally {
            setBusy(false);
        }
    }

    const handleUpdate = async () => {
        if (!file) return;
        const ext = file.name.includes('.') ?
            file.name.substring(file.name.lastIndexOf('.')) :
            '.png';
        const newName = `${Date.now()}${ext}`;
        const renamedFile = new File([file], newName, {type: file?.type});
        const formData = new FormData();
        formData.append('image', renamedFile);
        const newObj: UserProps = {
            ...myDetails,
            image: newName
        }
        try {
            setBusy(true);
            await deleteImage(myDetails.image!).unwrap();
            await uploadImage(formData).unwrap();
            await updateUser({id: newObj.id!,  data: newObj}).unwrap();
            setEditDel(false);
            setFile(null);
            setMyDetails(newObj);
            localStorage.setItem('myAccount', JSON.stringify(newObj));
        } catch (err) {
            console.error(err);
            alert('Error saving file');
        } finally {
            setBusy(false);
        }
    }

    return (
        <div className='lg:w-[40%]'>
            {busy && <WaitingModal />}
            <div className='relative overflow-hidden rounded-full'>
                {editDel &&
                <div className='absolute flex gap-[4px] w-full h-full'>
                    <label className='w-1/2 bg-[#ffffff99] centered border-r-[0.5px] border-black cursor-pointer'>
                        <input type="file" className='hidden' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (e.target.files && e.target.files.length > 0) {
                                setFile(e.target.files[0]);
                            }
                        }} />
                        <PencilIcon className='w-7 text-black' />
                    </label>
                    <div className='w-1/2 bg-[#ffffff99] centered border-l-[0.5px] border-black cursor-pointer' onClick={handleDelete}>
                        <TrashIcon className='w-7 text-black' />
                    </div>
                </div>}
                {myDetails.image || file ?
                <div className='w-[300px] h-[300px]' onClick={() => setEditDel(true)}>
                    <Image
                        src={file ? URL.createObjectURL(file) : `https://res.cloudinary.com/dswmp2omq/image/upload/v1752440139/salonApp/logins/${myDetails.image}`}
                        alt='Image'
                        width={300}
                        height={300}
                        loading='lazy'
                        className='w-full h-full object-cover'
                    />
                </div> :
                <div className='centered border-[1px] rounded-full p-5'>
                    <UserIcon className='w-[150px]' />
                    <label htmlFor="fileInput" className='w-full h-full absolute'></label>
                    <input
                        type="file"
                        className='hidden'
                        id='fileInput'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (e.target.files && e.target.files.length > 0) {
                                setFile(e.target.files[0]);
                            }
                        }}
                    />
                </div>}
            </div>
            {file &&
            <div className={`flex gap-10 p-3 justify-center ${busy ? 'hidden' : ''}`}>
                <button onClick={() => myDetails.image !== '' ? handleUpdate() : handleUpload()}>{myDetails.image !== '' ? 'Update' : 'Upload'}</button>
                <button onClick={() => setFile(null)}>Remove</button>
            </div>}
        </div>
    )
}

export default ImageComponent;