type Job = () => Promise<any>;

export class Scheduler {
	jobs: Job[] = [];
	runningJobs = 0;

	constructor(public readonly max = 2) {}

	run() {
		const { jobs } = this;

		const job = jobs.shift();

		if (job) {
			this.runningJobs++;

			job().finally(() => {
				this.runningJobs--;
				jobs.length && this.run();
			});
		}
	}

	push(job: Job) {
		return new Promise<any>((resolve, reject) => {
			this.jobs.push(() => job().then(resolve, reject));

			if (this.runningJobs < this.max) this.run();
		});
	}
}
