import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'


interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  
}
/*Nesta função nós ultilizamos o conceito de desestruturação ({hasborder = true, src})*/
export function Avatar({ hasBorder = true, ...props}: AvatarProps ) {  
  return (          /* If: se as minhas propriedades tem hasBorder ? mostrar withborder :(senão) stylesavatar, sem borda*/
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    {...props}
    />
  )
}