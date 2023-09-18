import  { atom } from 'recoil'

export interface CommunityModalState {
    open : boolean;
    
}

const defaultModalState : CommunityModalState = {
    open: false,
   
    
}
export const communityModal = atom<CommunityModalState>({
    key: 'communityModal',
    default: defaultModalState
})