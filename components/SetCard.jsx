const SetCard = ({ set }) => {
    return (
        <div className="h-[300px] w-[300px] border-4 border-green-600 rounded-lg mb-16">
                    <div className='flex'>
                      <div className='m-2 h-[130px] w-[130px] border-2 border-black rounded-lg'>
                        {set[0]}
                      </div>
                      <div className='m-2 h-[130px] w-[130px] border-2 border-black rounded-lg'>
                        {set[1]}
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='m-2 h-[130px] w-[130px] border-2 border-black rounded-lg'>
                        {set[2]}
                      </div>
                      <div className='m-2 h-[130px] w-[130px] border-2 border-black rounded-lg'>
                        {set[3]}
                      </div>
                    </div>                
                  </div>
    )
}

export default SetCard