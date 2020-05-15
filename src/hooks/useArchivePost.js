import React, { useState, useEffect } from "react";
import axios from "axios";

function useArchivePost(fn) {
  const [res, setRes] = useState({
    data: null,
    complete: false,
    pending: false,
    error: false
  });
  const [req, setReq] = useState();

  useEffect(
    () => {
      if (!req) return;
      setRes({
        data: null,
        pending: true,
        error: false,
        complete: false
      });
      const fetchData = async () => {
        try {
				  const res = await axios(req)
          setRes({
            data: res.data,
            pending: false,
            error: false,
            complete: true
          })
				} catch(err) {
          setRes({
            data: null,
            pending: false,
            error: true,
            complete: true
          })
				}
      }
			fetchData()
    },
    [req]
  );

  return [res, (...args) => setReq(fn(...args))];
}

export default useArchivePost
