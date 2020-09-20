import categoryOneImage from "../../images/01.png";
import categoryTwoImage from "../../images/03.png";
import categoryThreeImage from "../../images/10.png";
import categoryFourImage from "../../images/11.png";
import categoryFiveImage from "../../images/09.png";

export const INITIAL_STATE = {
    sections: [
        {
            id: 1,
            title: 'category #1',
            image: categoryOneImage,
            linkUrl: 'category_1'
        },
        {
            id: 2,
            title: 'category #2',
            image: categoryTwoImage,
            linkUrl: 'category_2'
        },
        {
            id: 3,
            title: 'category #3',
            image: categoryThreeImage,
            linkUrl: 'category_3'
        },
        {
            id: 4,
            title: 'category #4',
            image: categoryFourImage,
            linkUrl: 'category_4'
        },
        {
            id: 5,
            title: 'category #5',
            image: categoryFiveImage,
            linkUrl: 'category_5'
        },

    ]
}