import { render, screen } from "@testing-library/react";
import UserTable from "./UserTable";
import data from "./data.json"
import fetchMock from "jest-fetch-mock";


fetchMock.enableMocks()
describe("userTable funciton tests:", ()=>{
    beforeEach(() => {
        fetch.resetMocks();
      });
    it("should correctly fetch and render a table of users.",async ()=>{
        fetch.mockResponseOnce(JSON.stringify(data));
        render(<UserTable/>)
        const userTable=await screen.findAllByTestId("user-row")
        expect(userTable).toHaveLength(10)
    })

    it("should contain rows for each user fetched from the API.", async()=>{
        fetch.mockResponseOnce(JSON.stringify(data));
        render(<UserTable/>)
        const userTable=await screen.findAllByTestId("user-row")

        data.forEach((user, i) => {
            expect(userTable[i]).toHaveTextContent(user.id.toString());
            expect(userTable[i]).toHaveTextContent(user.name);
            expect(userTable[i]).toHaveTextContent(user.email);
            expect(userTable[i]).toHaveTextContent(user.phone);
          });
    })
})