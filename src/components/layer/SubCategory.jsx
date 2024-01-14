import React from 'react'
import List from './List'
import ListItem from './ListItem'

const SubCategory = ({ className }) => {
    return (
        <div className={`p-10 flex gap-x-5 w-[370px] md:w-[470px] ${className} `}>
            <div>
                <h3>Phones</h3>
                <List className="flex-col">
                    <ListItem listInnerItem="Phone 1" />
                    <ListItem listInnerItem="Phone 2" />
                    <ListItem listInnerItem="Phone 3" />
                    <ListItem listInnerItem="Phone 4" />
                    <ListItem listInnerItem="Phone 5" />
                    <ListItem listInnerItem="Phone 6" />
                    <ListItem listInnerItem="Phone 7" />
                </List>
            </div>
            <div>
                <h3>Computer</h3>
                <List className="flex-col">
                    <ListItem listInnerItem="Computer 1" />
                    <ListItem listInnerItem="Computer 2" />
                    <ListItem listInnerItem="Computer 3" />
                    <ListItem listInnerItem="Computer 4" />
                    <ListItem listInnerItem="Computer 5" />
                    <ListItem listInnerItem="Computer 6" />
                    <ListItem listInnerItem="Computer 7" />
                </List>
            </div>
            <div>
                <h3>Smart watches</h3>
                <List className="flex-col">
                    <ListItem listInnerItem="Smart watches 1" />
                    <ListItem listInnerItem="Smart watches 2" />
                    <ListItem listInnerItem="Smart watches 3" />
                    <ListItem listInnerItem="Smart watches 4" />
                    <ListItem listInnerItem="Smart watches 5" />
                    <ListItem listInnerItem="Smart watches 6" />
                    <ListItem listInnerItem="Smart watches 7" />
                </List>
            </div>
            <div>
                <h3>Camera</h3>
                <List className="flex-col">
                    <ListItem listInnerItem="Camera 1" />
                    <ListItem listInnerItem="Camera 2" />
                    <ListItem listInnerItem="Camera 3" />
                    <ListItem listInnerItem="Camera 4" />
                    <ListItem listInnerItem="Camera 5" />
                    <ListItem listInnerItem="Camera 6" />
                    <ListItem listInnerItem="Camera 7" />
                </List>
            </div>
        </div>
    )
}

export default SubCategory