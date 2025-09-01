import { StaticImageData } from "next/image";
import client from '@/assets/images/user/client-07.jpg'
import client4 from '@/assets/images/user/client-04.jpg'
import client5 from '@/assets/images/user/client-05.jpg'
import client3 from '@/assets/images/user/client-03.jpg'
import type { FaqType} from './types'

 
type SliderDataType  =  {
    title:string,
    description:string,
    image:StaticImageData,
    name:string,
    catageries :string
}

export const sliderData : SliderDataType [] =[
    {
        title: 'Satisfied user here!',
        description: " As a satisfied user, I can confidence say that my experience with NioLand has been outstanding. The service, support, and solutions provided have...",
        image: client,
        name : 'Natasha Romanoff',
        catageries : 'Black Widow'
    },
    {
        title: "It's just incredible!",
        description: 'I am extremely delighated with the exceptional serviceprovided by NioLand. Their expert support system,efficient tools, and strategic solutions have truly...',
        image: client4,
        name : ' Jimmy Bartney',
        catageries : 'Product Manager At Picko Lab'
    },
    {
        title: ' No doubt, spend. in is the best!',
        description: "Without a doubt, Spend in stands out as the absolute best.Their exceptional quality, reliablity, and customer service are unmatched. I have complete....",
        image: client5,
        name : ' Moritika Kazuki',
        catageries : 'Finance Manager at Mangan'
    },
    {
        title: 'Best service here!',
        description: "I've tried many services, but none compare to the excellence provided here! From start to finish, the team has been attentive, professional, and committed to delivering the best results.",
        image: client3,
        name : ' Barbara McIntosh',
        catageries : 'Senior Software Developer'
    },
]


const faqContents: FaqType[] = [
    {
      title: 'What are your service hours?',
      description:
        "We're open Monday-Saturday 9AM-7PM, Sunday 10AM-5PM. Emergency support is available 24/7.",
    },
    {
      title: 'Do you provide home service?',
      description:
        "Yes, we offer doorstep service for maintenance and minor repairs within our service areas.",
    },
    {
      title: 'Which EV brands do you service?',
      description:
        'We service all major EV brands including Hero Electric, Okinawa, Ather, TVS iQube, and more.',
    },
    {
      title: 'Do you offer financing options?',
      description:
        "Yes, we provide flexible financing options and assist with government subsidy applications.",
    },
  ]

  export {faqContents}