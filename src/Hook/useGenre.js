
const useGenre=(selectesGeners)=>{
    if(selectesGeners < 1) return"";

    const GenreIds= selectesGeners.map((g)=>g.id)
    return GenreIds.reduce((acc,curr)=>acc + ","+ curr);

}

export default useGenre