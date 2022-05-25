import invalidCredentials from '../Commons/invalidCredentials'
import { useNavigate, Navigate } from 'react-router-dom'
import serverMessage from '../Commons/serverMessage'
import React, {useEffect} from 'react'



function MyNavigate({text}) {
	const navi = useNavigate();
	useEffect(() => navi(text), []);
}