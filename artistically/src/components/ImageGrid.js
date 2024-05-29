import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImageGrid() {
    const itemData = Array.from(Array(9).keys()).map((index) => ({
        img: `/p${index + 1}.png`, // Assuming images are named p1.png to p9.png in the public folder
        title: `Image ${index + 1}`,
    }));

    const itemWidth = 300; // Adjust width of each ImageListItem

    return (
        <div style={{ width: '70%', padding: '0px', overflow: 'hidden', marginTop: '5cm', marginLeft: '0' }}> {/* Added marginLeft */}
            <ImageList sx={{ width: '100%', height: '100%', overflowY: 'auto' }} cols={3} rowHeight={300}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} sx={{ width: itemWidth, margin: '0' }}>
                        <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}
