import { MoveInfo } from './move-info';
import { Observable } from 'rxjs';

export interface Move {
    levelLearnedAt: number,
    moveUrl:string,
    moveInfo:MoveInfo
    
    
}
