for (const [key,value] of Object.entries(process.memoryUsage())){
	console.log(`Memory usage by ${key}, ${value} bytes`)
}