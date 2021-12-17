import React, { useState, useEffect } from 'react';
import GlobalStatsCard from './GlobalStatsCard';
import { getGlobalStats } from '../api/cryptoApi.js';

const GlobalStats = () => {
	const [stats, setStats] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const fetchStats = async () => {
			const { data } = await getGlobalStats();
			setStats(data);
		};
		fetchStats();
		setLoading(true);
	}, []);

	return <GlobalStatsCard loading={loading} data={stats} />;
};

export default GlobalStats;
