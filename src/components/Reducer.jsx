export default function reducer (state, action) {
    switch (action.type) {
      case 'category': {
        const categorySelected = action.payload;
  
        if ('' === categorySelected) {
            return state;
        }

        const listFiltered = state.filter (
          data => data.categoria === categorySelected
        );
  
        return listFiltered;
      }
      case 'type': {
        const typeSelected = action.payload;
  
        if ('' === typeSelected) {
            return state;
        }

        const listFiltered = state.filter (
          data => data.tipo === typeSelected
        );
  
        return listFiltered;
      }
      default: {
          return state;
      }

    }
}