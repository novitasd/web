import api from "../api/axios";

export async function createOrder(items) {
    const { data } = await api.post("/orders", {
        items
    });

    return data;
}