import { Button, Container, Stack } from "@mui/material";
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function AlignedButtons() {
    const [disabled, setDisabled]= useState(false)
    const handleDisabling=()=>{
        setDisabled(true)
    }
  return (
    <>
    <Container maxWidth="md">
      <Stack variant="text" direction={"row"} spacing={3} >
        <Button  color="secondary" disabled={disabled} onClick={handleDisabling
        } sx={{py: "0.5rem", px: "2rem"}}>Click to Disable</Button>
        <Button variant="outlined" color="info" sx={{py: "0.5rem", px: "2rem"}}startIcon={<AccountCircleIcon/>}>User Icon</Button>
        <Button variant="contained"color="secondary" sx={{bgcolor: "salmon" ,py: "0.5rem", px: "2rem"}} href="https://www.google.com/search?sca_esv=4dce914ffcc2bb88&sca_upv=1&rlz=1C1CHBD_enIR1067IR1068&sxsrf=ADLYWIIgkDeJ3gGVwSGrA4Of7llSMnZuPg:1723376765610&q=arcane&source=lnms&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J5MIFhvnvU242yFxzEEp3BdBGG7-GpSlpGrWJfg4SJpGugH53DxFKLJPS0D31dqX5R79qnaZ4ps2mu7ho0fW-ReiT0jae4eY0mIMMyPCQCBoZcQDWOh7Rh-Xud5Vd_O_pu7djII&sa=X&ved=2ahUKEwjSmLbf7uyHAxXI_rsIHZfoOhkQ0pQJegQIExAB&biw=1424&bih=670&dpr=1.35#wptab=si:ACC90nyLlcElEvb2bNLvGYvz3qiAMzDMrTOhb2FwsGDOJlhdZsggnQOjjEBbcihuI5GJEU2-NR81BuDt5HEBXN9igb9Ls8IFjyhn9Hegpq2CeGStnGYtNfdzuPjhbp-KYxPKFiEPO9G6" >you must watch this.</Button>
      </Stack>

    </Container>
    </>
  );
}
