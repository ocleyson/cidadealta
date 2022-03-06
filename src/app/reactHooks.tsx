import { useEffect, useState, useCallback } from 'react';
import api from './api';
import axios from 'axios';

interface IUseFetchState<T> {
    data: T;
    loading: boolean;
    errorMessage: string | null;
}

export function useFetch<T = unknown>(url: string): IUseFetchState<T> {
    const [data, setData] = useState<any>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        try {
            const res = await api.get(url);

            setData(res.data);
        } catch (err) {
            axios.isAxiosError(err) && setErrorMessage(err?.response?.data.message || err.message);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {
        data,
        loading,
        errorMessage,
    };
}
