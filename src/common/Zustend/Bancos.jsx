import {create} from 'zustand';

const useBancos = create((set) => ({
  bancoId: '',
  setBancoId: (id) => set(() => ({
    bancoId
      : id
  })),
}));

export default useBancos;