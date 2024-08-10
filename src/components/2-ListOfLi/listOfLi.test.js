/* eslint-disable no-undef */

import { render, screen} from "@testing-library/react";
import ListOfLi from "./ListOfLi";

describe("listOfLi tests:", ()=>{
    it("should show 4 for the number of lis", ()=>{
        const fakeData= ['ali', 'aghil', 'khashayar', 'hossein']
        render(<ListOfLi usernames={fakeData}/>)
        const lis= screen.getAllByRole("listitem")
        expect(lis).toHaveLength(4)
    })
})