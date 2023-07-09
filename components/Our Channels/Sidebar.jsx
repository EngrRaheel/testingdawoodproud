
import React, { useState, useEffect } from 'react';

function SiderBar() {

    // const [activeSection, setActiveSection] = useState('');
    const liItem = [
        {
            "name": "1. Space Matters",
            "id": "#Space_Matters"
        },
        {
            "name": "2. 9 Figure Life",
            "id": "#9_Figure_Life"
        },
        {
            "name": "3. Joyous Travel",
            "id": "#Joyous_Travel"
        },
        {
            "name": "4. Wild Iron",
            "id": "#Wild_Iron"
        },
        {
            "name": "5. Body Hub",
            "id": "#Body_Hub"
        },
        {
            "name": "6. Future Lab",
            "id": "#Future_Lab"
        },


    ]

    const sectionIds = liItem.map((item) => item.id);

    useEffect(() => {
        // Add scroll event listener to the window
        window.addEventListener('scroll', handleScroll);

        // Remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleScroll() {
        const scrollPosition = window.scrollY + 20;
        const sectionIds = ["Space_Matters", "9_Figure_Life", "Joyous_Travel", "Wild_Iron", "Body_Hub", " Future_Lab"];
        const currentSectionIds = sectionIds.filter((id) => {
            const element = document.getElementById(id);
            return element && element.offsetTop <= scrollPosition;
        });
        const currentSectionId = currentSectionIds[currentSectionIds.length - 1];
        const activeListItem = document.querySelector(`[href="#${currentSectionId}"]`);
        const activeListItems = document.querySelectorAll(".active");
        activeListItems.forEach((item) => item.classList.remove("active"));
        if (activeListItem) {
            activeListItem.parentElement.classList.add("active");
        }
    }


    return (

        <div className="max-w-lg mx-auto text-blue border-r-2 border-[gray]/60 ">
            <aside className="w-full" aria-label="Sidebar">
                <div className="px-3 py-4 overflow-y-auto  mt-8 text-left">
                    <h2 className='p-2 text-base font-bold ml-4'>Content</h2>
                    <ul className="space-y-2 py-4">
                        {liItem.map((item, index) =>
                            <li key={index} className="w-full ">
                                <a href={item.id}
                                    className="font-Inter text-sm font-light">
                                    <span className="ml-3 hover:text-[#1d9bf0]">{item.name}</span>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </aside>
        </div>

    )
}

export default SiderBar