const baseURL = "http://localhost:3000"; // Write down the base URL of the created API.

const getAllUser = async () => {
  try {
    const res = await fetch(`${baseURL}/member`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (userData) => {
  try {
    await fetch(`${baseURL}/member`, {
      body: JSON.stringify(userData),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    return { res: true, error: false };
  } catch (error) {
    console.log(error);
    return { res: false, error: true };
  }
};

const deleteUser = async (id) => {
  try {
    await fetch(`${baseURL}/member/${id}`, { method: 'DELETE' });
    return { res: true, error: false };
  } catch (error) {
    console.log(error);
    return { res: false, error: true };
  }
};

export { getAllUser, deleteUser, createUser };
