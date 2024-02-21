export default function ErrorComponent({ onClick }: { onClick: () => void }) {
    return (

        <div className='flex flex-row gap-4 justify-center items-center pt-5'>
            <h1 className='text-primary'>An error occured</h1>
            <button className='btn btn-sm btn-primary' onClick={onClick}>Retry</button>
        </div>


    )
}
