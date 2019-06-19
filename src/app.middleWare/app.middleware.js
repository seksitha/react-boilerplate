export const middleWare = store => next => action => {
   console.log('rrrrrrrrrrrrrrrrun')
   console.log(action)
   next(action);
   if(action.type==='helo'){ 
      store.dispatch({type:'helo worl', payload:null})
   }
   
}