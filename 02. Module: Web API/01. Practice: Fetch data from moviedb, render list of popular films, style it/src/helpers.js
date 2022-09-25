import { fetchStart, fetchEnd } from "./webApi.js";

export const asyncProvider = async (func) => {
    try {
        document.dispatchEvent(fetchStart);
        if (typeof func === 'function') {
            await func();
        }
    } catch (error) {
        console.error('Error in provider:', { error });
    } finally {
        document.dispatchEvent(fetchEnd);
    }
};
