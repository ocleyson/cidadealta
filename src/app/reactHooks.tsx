import { useEffect, useState, useCallback } from 'react';

import axios from 'axios';

import api from './api';

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

export function useDebounce(value: string, delay: number): string {

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay]
    );
    return debouncedValue;
  }
