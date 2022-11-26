import Router from 'next/router';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

export default function BackButton() {
    return (
        <div>
            <div className='bz-p-1 bz-text-primary-black bz-cursor-pointer bz-rounded-md bz-flex'
                onClick={() => Router.back()}
            >
                <div className='bz-flex'>
                    <ArrowBackRoundedIcon style={{ width: '1.2em', height: '1.2em' }} />
                </div>
                <div className='bz-flex bz-ml-1 bz-text-base bz-font-semibold'>
                </div>
                <div className='bz-flex bz-ml-1 bz-text-base bz-font-semibold'>
                    Back
                </div>
            </div>
        </div>
    );
};