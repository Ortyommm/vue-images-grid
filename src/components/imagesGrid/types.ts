import { PropType } from 'vue'

export interface Image {
  id: string | number
  src: string
  alt?: string
  [prop: string]: any
}

export type ObjectFit = 'fill' | 'cover' | 'none' | 'scale-down' | 'contain'

export type ColData = Image[][]

// export type ImagesGridPropsUnion =
//   | {
//       cols: number
//       images: Image[]
//       imageStyle: CSSStyleDeclaration
//       objectFit?: ObjectFit
//       colSpaces: string
//     }
//   | {
//       cols: ColData
//       images: undefined
//       imageStyle: CSSStyleDeclaration
//       objectFit?: ObjectFit
//       colSpaces: string
//     }

// export interface ImagesGridProps {
//   cols: number | ColData
//   images?: Image[]
//   imageStyle?: CSSStyleDeclaration
//   objectFit?: ObjectFit
//   colSpaces?: string
//   isResponsive?: boolean
// }

export interface ImageItemProps {
  image: Image
  objectFit?: ObjectFit
}

export const imagesGridProps = {
  cols: {
    type: [Array, Number] as PropType<ColData | number>,
    required: true,
    default: 3,
  },
  images: {
    type: Array as PropType<Image[]>,
    required: false,
    default: () => [],
  },
  imageStyle: {
    type: [Object, String] as PropType<Partial<CSSStyleDeclaration> | string>,
    required: false,
  },
  objectFit: {
    type: String as PropType<ObjectFit>,
    required: false,
    default: 'cover',
  },
  colSpaces: {
    required: false,
    default: '20px',
  },
  isResponsive: {
    required: false,
    default: true,
  },
}
