// import React, { useState, useEffect } from 'react';

// const AddData = () => {
//   const [data, setData] = useState([
//   {
//     "image-array": [
//       "image1.png",
//       "image2.png",
//       "image3.png"
//     ],
//     "image_name": "Modern Abstract Shapes",
//     "creator_name": "John Doe",
//     "like": true,
//     "likes": 3421,
//     "views": 7824,
//     "sort_by": "Most Appreciated",
//     "type": "vector",
//     "price_type": "free",
//     "category": "template",
//     "file_extension": ".ai",
//     "availability": "full time",
//     "country": "USA",
//     "tools": [
//       "Photoshop",
//       "Illustrator",
//       "InDesign"
//     ],
//     "color_of_the_image": "#FF5733",
//     "colors_used": [
//       "#FF5733",
//       "#33FF57",
//       "#3357FF",
//       "#FF33A1",
//       "#A133FF"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Illustrator",
//       "InDesign",
//       "Sketch",
//       "Figma",
//       "CorelDRAW",
//       "Affinity Designer",
//       "GIMP",
//       "Canva",
//       "Blender"
//     ],
//     "countries_list": [
//       "USA",
//       "Canada",
//       "UK",
//       "Germany",
//       "France",
//       "India",
//       "Japan",
//       "China",
//       "Brazil",
//       "Australia"
//     ],
//     "file_extensions_list": [
//       ".ai",
//       ".psd",
//       ".indd",
//       ".sketch",
//       ".fig",
//       ".cdr",
//       ".afdesign",
//       ".svg",
//       ".png",
//       ".jpg"
//     ]
//   },
//   {
//     "image-array": [
//       "image4.png",
//       "image5.png",
//       "image6.png"
//     ],
//     "image_name": "Elegant Serif Fonts",
//     "creator_name": "Jane Smith",
//     "like": false,
//     "likes": 231,
//     "views": 564,
//     "sort_by": "Recommended",
//     "type": "font",
//     "price_type": "paid",
//     "category": "template",
//     "file_extension": ".psd",
//     "availability": "freelance",
//     "country": "UK",
//     "tools": [
//       "Photoshop",
//       "Illustrator",
//       "Figma"
//     ],
//     "color_of_the_image": "#33FF57",
//     "colors_used": [
//       "#33FF57",
//       "#3357FF",
//       "#FF33A1"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Illustrator",
//       "Figma",
//       "Sketch",
//       "Affinity Designer"
//     ],
//     "countries_list": [
//       "UK",
//       "Germany",
//       "France",
//       "India",
//       "Japan"
//     ],
//     "file_extensions_list": [
//       ".psd",
//       ".sketch",
//       ".fig",
//       ".svg",
//       ".jpg"
//     ]
//   },
//   {
//     "image-array": [
//       "image7.png",
//       "image8.png",
//       "image9.png"
//     ],
//     "image_name": "Geometric Patterns",
//     "creator_name": "David Brown",
//     "like": true,
//     "likes": 980,
//     "views": 1587,
//     "sort_by": "Most Followed",
//     "type": "template",
//     "price_type": "subscription",
//     "category": "vector",
//     "file_extension": ".svg",
//     "availability": "full time",
//     "country": "Germany",
//     "tools": [
//       "Illustrator",
//       "InDesign",
//       "Figma"
//     ],
//     "color_of_the_image": "#3357FF",
//     "colors_used": [
//       "#3357FF",
//       "#FF33A1",
//       "#A133FF"
//     ],
//     "tools_list": [
//       "Illustrator",
//       "InDesign",
//       "Figma",
//       "Sketch",
//       "Canva"
//     ],
//     "countries_list": [
//       "Germany",
//       "France",
//       "India",
//       "Japan",
//       "China"
//     ],
//     "file_extensions_list": [
//       ".svg",
//       ".png",
//       ".jpg"
//     ]
//   },
//   {
//     "image-array": [
//       "image10.png",
//       "image11.png",
//       "image12.png"
//     ],
//     "image_name": "Vibrant Typography",
//     "creator_name": "Emily Johnson",
//     "like": true,
//     "likes": 654,
//     "views": 1234,
//     "sort_by": "Curated",
//     "type": "vector",
//     "price_type": "free",
//     "category": "font",
//     "file_extension": ".png",
//     "availability": "freelance",
//     "country": "USA",
//     "tools": [
//       "Photoshop",
//       "Figma",
//       "Canva"
//     ],
//     "color_of_the_image": "#FF33A1",
//     "colors_used": [
//       "#FF33A1",
//       "#A133FF",
//       "#FFFF00"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Figma",
//       "Canva",
//       "Sketch",
//       "GIMP"
//     ],
//     "countries_list": [
//       "USA",
//       "Canada",
//       "UK",
//       "Germany",
//       "France"
//     ],
//     "file_extensions_list": [
//       ".png",
//       ".jpg",
//       ".gif"
//     ]
//   },
//   {
//     "image-array": [
//       "image13.png",
//       "image14.png",
//       "image15.png"
//     ],
//     "image_name": "Minimalist Posters",
//     "creator_name": "Michael Lee",
//     "like": false,
//     "likes": 102,
//     "views": 345,
//     "sort_by": "Most Viewed",
//     "type": "template",
//     "price_type": "paid",
//     "category": "vector",
//     "file_extension": ".jpg",
//     "availability": "full time",
//     "country": "India",
//     "tools": [
//       "Illustrator",
//       "InDesign",
//       "Sketch"
//     ],
//     "color_of_the_image": "#A133FF",
//     "colors_used": [
//       "#A133FF",
//       "#FFFF00",
//       "#00FFFF"
//     ],
//     "tools_list": [
//       "Illustrator",
//       "InDesign",
//       "Sketch",
//       "Figma",
//       "CorelDRAW"
//     ],
//     "countries_list": [
//       "India",
//       "Japan",
//       "China",
//       "Brazil",
//       "Australia"
//     ],
//     "file_extensions_list": [
//       ".jpg",
//       ".gif",
//       ".eps"
//     ]
//   },
//   {
//     "image-array": [
//       "image16.png",
//       "image17.png",
//       "image18.png"
//     ],
//     "image_name": "Bright Color Palettes",
//     "creator_name": "Sophia Garcia",
//     "like": true,
//     "likes": 874,
//     "views": 1978,
//     "sort_by": "Most Recent",
//     "type": "font",
//     "price_type": "subscription",
//     "category": "template",
//     "file_extension": ".gif",
//     "availability": "full time",
//     "country": "Canada",
//     "tools": [
//       "Photoshop",
//       "Figma",
//       "Canva"
//     ],
//     "color_of_the_image": "#FFFF00",
//     "colors_used": [
//       "#FFFF00",
//       "#00FFFF",
//       "#FF00FF"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Figma",
//       "Canva",
//       "Affinity Designer",
//       "GIMP"
//     ],
//     "countries_list": [
//       "Canada",
//       "UK",
//       "Germany",
//       "France",
//       "India"
//     ],
//     "file_extensions_list": [
//       ".gif",
//       ".eps",
//       ".tiff"
//     ]
//   },
//   {
//     "image-array": [
//       "image19.png",
//       "image20.png",
//       "image21.png"
//     ],
//     "image_name": "Neon Glows",
//     "creator_name": "Daniel Wilson",
//     "like": false,
//     "likes": 531,
//     "views": 1321,
//     "sort_by": "Most Appreciated",
//     "type": "template",
//     "price_type": "free",
//     "category": "font",
//     "file_extension": ".eps",
//     "availability": "freelance",
//     "country": "UK",
//     "tools": [
//       "Illustrator",
//       "InDesign",
//       "Sketch"
//     ],
//     "color_of_the_image": "#00FFFF",
//     "colors_used": [
//       "#00FFFF",
//       "#FF00FF",
//       "#000000"
//     ],
//     "tools_list": [
//       "Illustrator",
//       "InDesign",
//       "Sketch",
//       "Figma",
//       "GIMP"
//     ],
//     "countries_list": [
//       "UK",
//       "Germany",
//       "France",
//       "India",
//       "Japan"
//     ],
//     "file_extensions_list": [
//       ".eps",
//       ".tiff"
//     ]
//   },
//   {
//     "image-array": [
//       "image22.png",
//       "image23.png",
//       "image24.png"
//     ],
//     "image_name": "Pastel Patterns",
//     "creator_name": "Olivia Brown",
//     "like": true,
//     "likes": 762,
//     "views": 2345,
//     "sort_by": "Recommended",
//     "type": "vector",
//     "price_type": "paid",
//     "category": "template",
//     "file_extension": ".tiff",
//     "availability": "full time",
//     "country": "Germany",
//     "tools": [
//       "Photoshop",
//       "Figma",
//       "CorelDRAW"
//     ],
//     "color_of_the_image": "#FF00FF",
//     "colors_used": [
//       "#FF00FF",
//       "#000000",
//       "#FFFFFF"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Figma",
//       "CorelDRAW",
//       "Affinity Designer",
//       "Blender"
//     ],
//     "countries_list": [
//       "Germany",
//       "France",
//       "India",
//       "Japan",
//       "China"
//     ],
//     "file_extensions_list": [
//       ".tiff",
//       ".ai",
//       ".psd"
//     ]
//   },
//   {
//     "image-array": [
//       "image25.png",
//       "image26.png",
//       "image27.png"
//     ],
//     "image_name": "Monochrome Textures",
//     "creator_name": "Ethan Martinez",
//     "like": false,
//     "likes": 412,
//     "views": 987,
//     "sort_by": "Most Followed",
//     "type": "font",
//     "price_type": "free",
//     "category": "template",
//     "file_extension": ".fig",
//     "availability": "freelance",
//     "country": "France",
//     "tools": [
//       "Photoshop",
//       "Illustrator",
//       "InDesign"
//     ],
//     "color_of_the_image": "#000000",
//     "colors_used": [
//       "#000000",
//       "#FFFFFF",
//       "#FF5733"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Illustrator",
//       "InDesign",
//       "Figma",
//       "Canva"
//     ],
//     "countries_list": [
//       "France",
//       "India",
//       "Japan",
//       "China",
//       "Brazil"
//     ],
//     "file_extensions_list": [
//       ".fig",
//       ".cdr"
//     ]
//   },
//   {
//     "image-array": [
//       "image28.png",
//       "image29.png",
//       "image30.png"
//     ],
//     "image_name": "Floral Vectors",
//     "creator_name": "Ava Taylor",
//     "like": true,
//     "likes": 1568,
//     "views": 3765,
//     "sort_by": "Curated",
//     "type": "vector",
//     "price_type": "subscription",
//     "category": "font",
//     "file_extension": ".cdr",
//     "availability": "full time",
//     "country": "India",
//     "tools": [
//       "Illustrator",
//       "InDesign",
//       "Figma"
//     ],
//     "color_of_the_image": "#FFFFFF",
//     "colors_used": [
//       "#FFFFFF",
//       "#FF5733",
//       "#33FF57"
//     ],
//     "tools_list": [
//       "Illustrator",
//       "InDesign",
//       "Figma",
//       "Sketch",
//       "Canva"
//     ],
//     "countries_list": [
//       "India",
//       "Japan",
//       "China",
//       "Brazil",
//       "Australia"
//     ],
//     "file_extensions_list": [
//       ".cdr",
//       ".afdesign"
//     ]
//   },
//   {
//     "image-array": [
//       "image31.png",
//       "image32.png",
//       "image33.png"
//     ],
//     "image_name": "Retro Graphics",
//     "creator_name": "William Clark",
//     "like": true,
//     "likes": 874,
//     "views": 1978,
//     "sort_by": "Most Recent",
//     "type": "template",
//     "price_type": "paid",
//     "category": "vector",
//     "file_extension": ".afdesign",
//     "availability": "full time",
//     "country": "Canada",
//     "tools": [
//       "Photoshop",
//       "Figma",
//       "Canva"
//     ],
//     "color_of_the_image": "#FF5733",
//     "colors_used": [
//       "#FF5733",
//       "#33FF57",
//       "#3357FF"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Figma",
//       "Canva",
//       "Affinity Designer",
//       "GIMP"
//     ],
//     "countries_list": [
//       "Canada",
//       "UK",
//       "Germany",
//       "France",
//       "India"
//     ],
//     "file_extensions_list": [
//       ".afdesign",
//       ".svg"
//     ]
//   },
//   {
//     "image-array": [
//       "image34.png",
//       "image35.png",
//       "image36.png"
//     ],
//     "image_name": "Vintage Illustrations",
//     "creator_name": "Liam King",
//     "like": true,
//     "likes": 1850,
//     "views": 4120,
//     "sort_by": "Most Appreciated",
//     "type": "vector",
//     "price_type": "free",
//     "category": "template",
//     "file_extension": ".ai",
//     "availability": "full time",
//     "country": "USA",
//     "tools": [
//       "Photoshop",
//       "Illustrator",
//       "InDesign"
//     ],
//     "color_of_the_image": "#FFA500",
//     "colors_used": [
//       "#FFA500",
//       "#800080",
//       "#0000FF",
//       "#00FF00",
//       "#FFFF00"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Illustrator",
//       "InDesign",
//       "Sketch",
//       "Figma",
//       "CorelDRAW",
//       "Affinity Designer",
//       "GIMP",
//       "Canva",
//       "Blender"
//     ],
//     "countries_list": [
//       "USA",
//       "Canada",
//       "UK",
//       "Germany",
//       "France",
//       "India",
//       "Japan",
//       "China",
//       "Brazil",
//       "Australia"
//     ],
//     "file_extensions_list": [
//       ".ai",
//       ".psd",
//       ".indd",
//       ".sketch",
//       ".fig",
//       ".cdr",
//       ".afdesign",
//       ".svg",
//       ".png",
//       ".jpg"
//     ]
//   },
//   {
//     "image-array": [
//       "image37.png",
//       "image38.png",
//       "image39.png"
//     ],
//     "image_name": "Futuristic UI Kit",
//     "creator_name": "Ella White",
//     "like": true,
//     "likes": 1290,
//     "views": 3290,
//     "sort_by": "Recommended",
//     "type": "template",
//     "price_type": "paid",
//     "category": "vector",
//     "file_extension": ".psd",
//     "availability": "freelance",
//     "country": "UK",
//     "tools": [
//       "Photoshop",
//       "Illustrator",
//       "Figma"
//     ],
//     "color_of_the_image": "#808080",
//     "colors_used": [
//       "#808080",
//       "#FFFFFF",
//       "#000000",
//       "#FFD700"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Illustrator",
//       "Figma",
//       "Sketch",
//       "Affinity Designer"
//     ],
//     "countries_list": [
//       "UK",
//       "Germany",
//       "France",
//       "India",
//       "Japan"
//     ],
//     "file_extensions_list": [
//       ".psd",
//       ".sketch",
//       ".fig",
//       ".svg",
//       ".jpg"
//     ]
//   },
//   {
//     "image-array": [
//       "image40.png",
//       "image41.png",
//       "image42.png"
//     ],
//     "image_name": "Elegant Invitation Cards",
//     "creator_name": "James Turner",
//     "like": true,
//     "likes": 1780,
//     "views": 4021,
//     "sort_by": "Most Followed",
//     "type": "template",
//     "price_type": "subscription",
//     "category": "vector",
//     "file_extension": ".svg",
//     "availability": "full time",
//     "country": "Germany",
//     "tools": [
//       "Illustrator",
//       "InDesign",
//       "Figma"
//     ],
//     "color_of_the_image": "#FF69B4",
//     "colors_used": [
//       "#FF69B4",
//       "#00BFFF",
//       "#ADFF2F"
//     ],
//     "tools_list": [
//       "Illustrator",
//       "InDesign",
//       "Figma",
//       "Sketch",
//       "Canva"
//     ],
//     "countries_list": [
//       "Germany",
//       "France",
//       "India",
//       "Japan",
//       "China"
//     ],
//     "file_extensions_list": [
//       ".svg",
//       ".png",
//       ".jpg"
//     ]
//   },
//   {
//     "image-array": [
//       "image43.png",
//       "image44.png",
//       "image45.png"
//     ],
//     "image_name": "Bohemian Pattern Set",
//     "creator_name": "Emma Thompson",
//     "like": true,
//     "likes": 1590,
//     "views": 3420,
//     "sort_by": "Curated",
//     "type": "vector",
//     "price_type": "free",
//     "category": "template",
//     "file_extension": ".png",
//     "availability": "freelance",
//     "country": "USA",
//     "tools": [
//       "Photoshop",
//       "Figma",
//       "Canva"
//     ],
//     "color_of_the_image": "#4B0082",
//     "colors_used": [
//       "#4B0082",
//       "#FF4500",
//       "#FFD700"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Figma",
//       "Canva",
//       "Sketch",
//       "GIMP"
//     ],
//     "countries_list": [
//       "USA",
//       "Canada",
//       "UK",
//       "Germany",
//       "France"
//     ],
//     "file_extensions_list": [
//       ".png",
//       ".jpg",
//       ".gif"
//     ]
//   },
//   {
//     "image-array": [
//       "image46.png",
//       "image47.png",
//       "image48.png"
//     ],
//     "image_name": "Classic Logo Collection",
//     "creator_name": "Mason Scott",
//     "like": false,
//     "likes": 450,
//     "views": 890,
//     "sort_by": "Most Viewed",
//     "type": "template",
//     "price_type": "paid",
//     "category": "vector",
//     "file_extension": ".jpg",
//     "availability": "full time",
//     "country": "India",
//     "tools": [
//       "Illustrator",
//       "InDesign",
//       "Sketch"
//     ],
//     "color_of_the_image": "#8B0000",
//     "colors_used": [
//       "#8B0000",
//       "#FFD700",
//       "#00FFFF"
//     ],
//     "tools_list": [
//       "Illustrator",
//       "InDesign",
//       "Sketch",
//       "Figma",
//       "CorelDRAW"
//     ],
//     "countries_list": [
//       "India",
//       "Japan",
//       "China",
//       "Brazil",
//       "Australia"
//     ],
//     "file_extensions_list": [
//       ".jpg",
//       ".gif",
//       ".eps"
//     ]
//   },
//   {
//     "image-array": [
//       "image49.png",
//       "image50.png",
//       "image51.png"
//     ],
//     "image_name": "Colorful Gradients",
//     "creator_name": "Aiden Martinez",
//     "like": true,
//     "likes": 1750,
//     "views": 3810,
//     "sort_by": "Most Recent",
//     "type": "font",
//     "price_type": "subscription",
//     "category": "template",
//     "file_extension": ".gif",
//     "availability": "full time",
//     "country": "Canada",
//     "tools": [
//       "Photoshop",
//       "Figma",
//       "Canva"
//     ],
//     "color_of_the_image": "#FFD700",
//     "colors_used": [
//       "#FFD700",
//       "#00FFFF",
//       "#FF00FF"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Figma",
//       "Canva",
//       "Affinity Designer",
//       "GIMP"
//     ],
//     "countries_list": [
//       "Canada",
//       "UK",
//       "Germany",
//       "France",
//       "India"
//     ],
//     "file_extensions_list": [
//       ".gif",
//       ".eps",
//       ".tiff"
//     ]
//   },
//   {
//     "image-array": [
//       "image52.png",
//       "image53.png",
//       "image54.png"
//     ],
//     "image_name": "Hand-drawn Icons",
//     "creator_name": "Sophia Walker",
//     "like": true,
//     "likes": 1620,
//     "views": 3500,
//     "sort_by": "Most Appreciated",
//     "type": "template",
//     "price_type": "free",
//     "category": "font",
//     "file_extension": ".eps",
//     "availability": "freelance",
//     "country": "UK",
//     "tools": [
//       "Illustrator",
//       "InDesign",
//       "Sketch"
//     ],
//     "color_of_the_image": "#00FFFF",
//     "colors_used": [
//       "#00FFFF",
//       "#FF00FF",
//       "#000000"
//     ],
//     "tools_list": [
//       "Illustrator",
//       "InDesign",
//       "Sketch",
//       "Figma",
//       "GIMP"
//     ],
//     "countries_list": [
//       "UK",
//       "Germany",
//       "France",
//       "India",
//       "Japan"
//     ],
//     "file_extensions_list": [
//       ".eps",
//       ".tiff"
//     ]
//   },
//   {
//     "image-array": [
//       "image55.png",
//       "image56.png",
//       "image57.png"
//     ],
//     "image_name": "Minimal Line Art",
//     "creator_name": "Isabella Young",
//     "like": true,
//     "likes": 1480,
//     "views": 3100,
//     "sort_by": "Recommended",
//     "type": "vector",
//     "price_type": "paid",
//     "category": "template",
//     "file_extension": ".tiff",
//     "availability": "full time",
//     "country": "Germany",
//     "tools": [
//       "Photoshop",
//       "Figma",
//       "CorelDRAW"
//     ],
//     "color_of_the_image": "#FF00FF",
//     "colors_used": [
//       "#FF00FF",
//       "#000000",
//       "#FFFFFF"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Figma",
//       "CorelDRAW",
//       "Affinity Designer",
//       "Blender"
//     ],
//     "countries_list": [
//       "Germany",
//       "France",
//       "India",
//       "Japan",
//       "China"
//     ],
//     "file_extensions_list": [
//       ".tiff",
//       ".ai",
//       ".psd"
//     ]
//   },
//   {
//     "image-array": [
//       "image58.png",
//       "image59.png",
//       "image60.png"
//     ],
//     "image_name": "Watercolor Backgrounds",
//     "creator_name": "Alexander Wright",
//     "like": true,
//     "likes": 1540,
//     "views": 3280,
//     "sort_by": "Most Followed",
//     "type": "font",
//     "price_type": "free",
//     "category": "template",
//     "file_extension": ".fig",
//     "availability": "freelance",
//     "country": "France",
//     "tools": [
//       "Photoshop",
//       "Illustrator",
//       "InDesign"
//     ],
//     "color_of_the_image": "#000000",
//     "colors_used": [
//       "#000000",
//       "#FFFFFF",
//       "#FF5733"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Illustrator",
//       "InDesign",
//       "Figma",
//       "Canva"
//     ],
//     "countries_list": [
//       "France",
//       "India",
//       "Japan",
//       "China",
//       "Brazil"
//     ],
//     "file_extensions_list": [
//       ".fig",
//       ".cdr"
//     ]
//   },
//   {
//     "image-array": [
//       "image61.png",
//       "image62.png",
//       "image63.png"
//     ],
//     "image_name": "Geometric Patterns",
//     "creator_name": "Charlotte Baker",
//     "like": false,
//     "likes": 560,
//     "views": 980,
//     "sort_by": "Most Appreciated",
//     "type": "vector",
//     "price_type": "free",
//     "category": "template",
//     "file_extension": ".ai",
//     "availability": "full time",
//     "country": "USA",
//     "tools": [
//       "Photoshop",
//       "Illustrator",
//       "InDesign"
//     ],
//     "color_of_the_image": "#808000",
//     "colors_used": [
//       "#808000",
//       "#FF00FF",
//       "#8B008B"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Illustrator",
//       "InDesign",
//       "Sketch",
//       "Figma",
//       "CorelDRAW",
//       "Affinity Designer",
//       "GIMP",
//       "Canva",
//       "Blender"
//     ],
//     "countries_list": [
//       "USA",
//       "Canada",
//       "UK",
//       "Germany",
//       "France",
//       "India",
//       "Japan",
//       "China",
//       "Brazil",
//       "Australia"
//     ],
//     "file_extensions_list": [
//       ".ai",
//       ".psd",
//       ".indd",
//       ".sketch",
//       ".fig",
//       ".cdr",
//       ".afdesign",
//       ".svg",
//       ".png",
//       ".jpg"
//     ]
//   },
//   {
//     "image-array": [
//       "image64.png",
//       "image65.png",
//       "image66.png"
//     ],
//     "image_name": "Abstract Artwork Collection",
//     "creator_name": "Oliver Harris",
//     "like": true,
//     "likes": 1980,
//     "views": 4320,
//     "sort_by": "Recommended",
//     "type": "font",
//     "price_type": "paid",
//     "category": "template",
//     "file_extension": ".psd",
//     "availability": "freelance",
//     "country": "UK",
//     "tools": [
//       "Photoshop",
//       "Illustrator",
//       "Figma"
//     ],
//     "color_of_the_image": "#008000",
//     "colors_used": [
//       "#008000",
//       "#800080",
//       "#FFD700"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Illustrator",
//       "Figma",
//       "Sketch",
//       "Affinity Designer"
//     ],
//     "countries_list": [
//       "UK",
//       "Germany",
//       "France",
//       "India",
//       "Japan"
//     ],
//     "file_extensions_list": [
//       ".psd",
//       ".sketch",
//       ".fig",
//       ".svg",
//       ".jpg"
//     ]
//   },
//   {
//     "image-array": [
//       "image67.png",
//       "image68.png",
//       "image69.png"
//     ],
//     "image_name": "Nature-Inspired Illustrations",
//     "creator_name": "Luna Rodriguez",
//     "like": true,
//     "likes": 1750,
//     "views": 3900,
//     "sort_by": "Most Followed",
//     "type": "template",
//     "price_type": "subscription",
//     "category": "vector",
//     "file_extension": ".svg",
//     "availability": "full time",
//     "country": "Germany",
//     "tools": [
//       "Illustrator",
//       "InDesign",
//       "Figma"
//     ],
//     "color_of_the_image": "#00FF00",
//     "colors_used": [
//       "#00FF00",
//       "#FFD700",
//       "#FFA500"
//     ],
//     "tools_list": [
//       "Illustrator",
//       "InDesign",
//       "Figma",
//       "Sketch",
//       "Canva"
//     ],
//     "countries_list": [
//       "Germany",
//       "France",
//       "India",
//       "Japan",
//       "China"
//     ],
//     "file_extensions_list": [
//       ".svg",
//       ".png",
//       ".jpg"
//     ]
//   },
//   {
//     "image-array": [
//       "image70.png",
//       "image71.png",
//       "image72.png"
//     ],
//     "image_name": "Vintage Typography Pack",
//     "creator_name": "Lucas Martin",
//     "like": false,
//     "likes": 530,
//     "views": 1100,
//     "sort_by": "Curated",
//     "type": "vector",
//     "price_type": "free",
//     "category": "font",
//     "file_extension": ".png",
//     "availability": "freelance",
//     "country": "USA",
//     "tools": [
//       "Photoshop",
//       "Figma",
//       "Canva"
//     ],
//     "color_of_the_image": "#000080",
//     "colors_used": [
//       "#000080",
//       "#800080",
//       "#800000"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Figma",
//       "Canva",
//       "Sketch",
//       "GIMP"
//     ],
//     "countries_list": [
//       "USA",
//       "Canada",
//       "UK",
//       "Germany",
//       "France"
//     ],
//     "file_extensions_list": [
//       ".png",
//       ".jpg",
//       ".gif"
//     ]
//   },
//   {
//     "image-array": [
//       "image73.png",
//       "image74.png",
//       "image75.png"
//     ],
//     "image_name": "Modern Web UI Elements",
//     "creator_name": "Aria Wilson",
//     "like": true,
//     "likes": 1670,
//     "views": 3800,
//     "sort_by": "Most Viewed",
//     "type": "template",
//     "price_type": "paid",
//     "category": "vector",
//     "file_extension": ".jpg",
//     "availability": "full time",
//     "country": "India",
//     "tools": [
//       "Illustrator",
//       "InDesign",
//       "Sketch"
//     ],
//     "color_of_the_image": "#8A2BE2",
//     "colors_used": [
//       "#8A2BE2",
//       "#FF4500",
//       "#00FFFF"
//     ],
//     "tools_list": [
//       "Illustrator",
//       "InDesign",
//       "Sketch",
//       "Figma",
//       "CorelDRAW"
//     ],
//     "countries_list": [
//       "India",
//       "Japan",
//       "China",
//       "Brazil",
//       "Australia"
//     ],
//     "file_extensions_list": [
//       ".jpg",
//       ".gif",
//       ".eps"
//     ]
//   },
//   {
//     "image-array": [
//       "image76.png",
//       "image77.png",
//       "image78.png"
//     ],
//     "image_name": "Grunge Texture Pack",
//     "creator_name": "Nathan Allen",
//     "like": true,
//     "likes": 1430,
//     "views": 3120,
//     "sort_by": "Most Recent",
//     "type": "font",
//     "price_type": "subscription",
//     "category": "template",
//     "file_extension": ".gif",
//     "availability": "full time",
//     "country": "Canada",
//     "tools": [
//       "Photoshop",
//       "Figma",
//       "Canva"
//     ],
//     "color_of_the_image": "#800000",
//     "colors_used": [
//       "#800000",
//       "#FFD700",
//       "#FF69B4"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Figma",
//       "Canva",
//       "Affinity Designer",
//       "GIMP"
//     ],
//     "countries_list": [
//       "Canada",
//       "UK",
//       "Germany",
//       "France",
//       "India"
//     ],
//     "file_extensions_list": [
//       ".gif",
//       ".eps",
//       ".tiff"
//     ]
//   },
//   {
//     "image-array": [
//       "image79.png",
//       "image80.png",
//       "image81.png"
//     ],
//     "image_name": "Abstract Background Collection",
//     "creator_name": "Ethan Wright",
//     "like": false,
//     "likes": 490,
//     "views": 920,
//     "sort_by": "Most Followed",
//     "type": "template",
//     "price_type": "free",
//     "category": "font",
//     "file_extension": ".fig",
//     "availability": "freelance",
//     "country": "France",
//     "tools": [
//       "Photoshop",
//       "Illustrator",
//       "InDesign"
//     ],
//     "color_of_the_image": "#808000",
//     "colors_used": [
//       "#808000",
//       "#FFFF00",
//       "#FF4500"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Illustrator",
//       "InDesign",
//       "Figma",
//       "Canva"
//     ],
//     "countries_list": [
//       "France",
//       "India",
//       "Japan",
//       "China",
//       "Brazil"
//     ],
//     "file_extensions_list": [
//       ".fig",
//       ".cdr"
//     ]
//   },
//   {
//     "image-array": [
//       "image82.png",
//       "image83.png",
//       "image84.png"
//     ],
//     "image_name": "Vintage Logo Set",
//     "creator_name": "Ella Thompson",
//     "like": true,
//     "likes": 1570,
//     "views": 3540,
//     "sort_by": "Curated",
//     "type": "vector",
//     "price_type": "paid",
//     "category": "template",
//     "file_extension": ".cdr",
//     "availability": "full time",
//     "country": "India",
//     "tools": [
//       "Illustrator",
//       "InDesign",
//       "Figma"
//     ],
//     "color_of_the_image": "#FF69B4",
//     "colors_used": [
//       "#FF69B4",
//       "#00BFFF",
//       "#ADFF2F"
//     ],
//     "tools_list": [
//       "Illustrator",
//       "InDesign",
//       "Figma",
//       "Sketch",
//       "Canva"
//     ],
//     "countries_list": [
//       "India",
//       "Japan",
//       "China",
//       "Brazil",
//       "Australia"
//     ],
//     "file_extensions_list": [
//       ".cdr",
//       ".afdesign"
//     ]
//   },
//   {
//     "image-array": [
//       "image85.png",
//       "image86.png",
//       "image87.png"
//     ],
//     "image_name": "Vintage Poster Designs",
//     "creator_name": "Noah Baker",
//     "like": true,
//     "likes": 1600,
//     "views": 3760,
//     "sort_by": "Most Recent",
//     "type": "template",
//     "price_type": "paid",
//     "category": "font",
//     "file_extension": ".afdesign",
//     "availability": "full time",
//     "country": "Canada",
//     "tools": [
//       "Photoshop",
//       "Figma",
//       "Canva"
//     ],
//     "color_of_the_image": "#FF5733",
//     "colors_used": [
//       "#FF5733",
//       "#33FF57",
//       "#3357FF"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Figma",
//       "Canva",
//       "Affinity Designer",
//       "GIMP"
//     ],
//     "countries_list": [
//       "Canada",
//       "UK",
//       "Germany",
//       "France",
//       "India"
//     ],
//     "file_extensions_list": [
//       ".afdesign",
//       ".svg"
//     ]
//   },
//   {
//     "image-array": [
//       "image88.png",
//       "image89.png",
//       "image90.png"
//     ],
//     "image_name": "Retro Badge Collection",
//     "creator_name": "Ava Wilson",
//     "like": true,
//     "likes": 1650,
//     "views": 3880,
//     "sort_by": "Most Appreciated",
//     "type": "vector",
//     "price_type": "free",
//     "category": "template",
//     "file_extension": ".eps",
//     "availability": "freelance",
//     "country": "UK",
//     "tools": [
//       "Illustrator",
//       "InDesign",
//       "Sketch"
//     ],
//     "color_of_the_image": "#FF4500",
//     "colors_used": [
//       "#FF4500",
//       "#008000",
//       "#0000FF"
//     ],
//     "tools_list": [
//       "Illustrator",
//       "InDesign",
//       "Sketch",
//       "Figma",
//       "GIMP"
//     ],
//     "countries_list": [
//       "UK",
//       "Germany",
//       "France",
//       "India",
//       "Japan"
//     ],
//     "file_extensions_list": [
//       ".eps",
//       ".tiff"
//     ]
//   },
//   {
//     "image-array": [
//       "image91.png",
//       "image92.png",
//       "image93.png"
//     ],
//     "image_name": "Vintage Pattern Collection",
//     "creator_name": "Olivia Martin",
//     "like": false,
//     "likes": 540,
//     "views": 1180,
//     "sort_by": "Recommended",
//     "type": "template",
//     "price_type": "free",
//     "category": "font",
//     "file_extension": ".tiff",
//     "availability": "full time",
//     "country": "Germany",
//     "tools": [
//       "Photoshop",
//       "Illustrator",
//       "InDesign"
//     ],
//     "color_of_the_image": "#00FF00",
//     "colors_used": [
//       "#00FF00",
//       "#FF00FF",
//       "#FFFF00"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Illustrator",
//       "InDesign",
//       "Figma",
//       "Canva"
//     ],
//     "countries_list": [
//       "Germany",
//       "France",
//       "India",
//       "Japan",
//       "China"
//     ],
//     "file_extensions_list": [
//       ".tiff",
//       ".ai",
//       ".psd"
//     ]
//   },
//   {
//     "image-array": [
//       "image94.png",
//       "image95.png",
//       "image96.png"
//     ],
//     "image_name": "Gothic Font Set",
//     "creator_name": "Mia Wilson",
//     "like": true,
//     "likes": 1550,
//     "views": 3620,
//     "sort_by": "Most Followed",
//     "type": "vector",
//     "price_type": "paid",
//     "category": "template",
//     "file_extension": ".ai",
//     "availability": "freelance",
//     "country": "USA",
//     "tools": [
//       "Photoshop",
//       "Illustrator",
//       "InDesign"
//     ],
//     "color_of_the_image": "#000080",
//     "colors_used": [
//       "#000080",
//       "#800080",
//       "#800000"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Illustrator",
//       "InDesign",
//       "Sketch",
//       "Figma",
//       "CorelDRAW",
//       "Affinity Designer",
//       "GIMP",
//       "Canva",
//       "Blender"
//     ],
//     "countries_list": [
//       "USA",
//       "Canada",
//       "UK",
//       "Germany",
//       "France",
//       "India",
//       "Japan",
//       "China",
//       "Brazil",
//       "Australia"
//     ],
//     "file_extensions_list": [
//       ".ai",
//       ".psd",
//       ".indd",
//       ".sketch",
//       ".fig",
//       ".cdr",
//       ".afdesign",
//       ".svg",
//       ".png",
//       ".jpg"
//     ]
//   },
//   {
//     "image-array": [
//       "image97.png",
//       "image98.png",
//       "image99.png"
//     ],
//     "image_name": "Retro Poster Designs",
//     "creator_name": "Jacob Baker",
//     "like": true,
//     "likes": 1700,
//     "views": 3800,
//     "sort_by": "Most Appreciated",
//     "type": "template",
//     "price_type": "free",
//     "category": "template",
//     "file_extension": ".psd",
//     "availability": "full time",
//     "country": "USA",
//     "tools": [
//       "Photoshop",
//       "Illustrator",
//       "InDesign"
//     ],
//     "color_of_the_image": "#800080",
//     "colors_used": [
//       "#800080",
//       "#FFFF00",
//       "#FF4500"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Illustrator",
//       "InDesign",
//       "Figma",
//       "Canva"
//     ],
//     "countries_list": [
//       "USA",
//       "Canada",
//       "UK",
//       "Germany",
//       "France"
//     ],
//     "file_extensions_list": [
//       ".psd",
//       ".sketch",
//       ".fig",
//       ".svg",
//       ".jpg"
//     ]
//   },
//   {
//     "image-array": [
//       "image100.png",
//       "image101.png",
//       "image102.png"
//     ],
//     "image_name": "Vintage Label Set",
//     "creator_name": "Ethan Harris",
//     "like": true,
//     "likes": 1630,
//     "views": 3700,
//     "sort_by": "Recommended",
//     "type": "font",
//     "price_type": "paid",
//     "category": "vector",
//     "file_extension": ".svg",
//     "availability": "freelance",
//     "country": "UK",
//     "tools": [
//       "Photoshop",
//       "Illustrator",
//       "Figma"
//     ],
//     "color_of_the_image": "#008000",
//     "colors_used": [
//       "#008000",
//       "#800080",
//       "#FFD700"
//     ],
//     "tools_list": [
//       "Photoshop",
//       "Illustrator",
//       "Figma",
//       "Sketch",
//       "Affinity Designer"
//     ],
//     "countries_list": [
//       "UK",
//       "Germany",
//       "France",
//       "India",
//       "Japan"
//     ],
//     "file_extensions_list": [
//       ".svg",
//       ".png",
//       ".jpg"
//     ]
//   }
//     ]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const newData = await Promise.all(
//         data.map(async (item) => {
//           item['image-array'] = [];
//           const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(item.image_name)}&per_page=4&client_id=5p6Lc7BLuNg7HihzDeqs7ebKpLKzoaXjhdOxml6Q4RM`);
//           const result = await response.json();
//           const images = result.results.map(photo => photo.urls.regular);
//           return {
//             ...item,
//             images: images
//           };
//         })
//       );
      
//       setData(newData);
//       console.log(newData)
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {/* Render your data */}
//       {data.map((item, index) => (
//         <div key={index}>
//           <h2>{item.image_name}</h2>
//           <div>
//             {/* Render fetched images */}
//             {item.images && item.images.map((image, idx) => (
//               <img key={idx} src={image} alt={`Image ${idx + 1}`} />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AddData;
