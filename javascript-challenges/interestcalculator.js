function calculateYears(principal, interest, tax, desired) {
    
    let fiscalYear = 0;
    for(let p = principal; p <= desired; fiscalYear++){
      let intrst = p*interest , taxation = intrst*tax;
      if(p === desired){
        return fiscalYear;
      }else{
    p = p+(intrst-taxation);
     console.log(p);
    }}
    return fiscalYear;
}