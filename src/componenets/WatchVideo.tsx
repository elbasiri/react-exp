import type { SourceVideo } from './VideosList';

export function WatchVideo({source, isOpen, resetSource}: {source: SourceVideo, isOpen: boolean, resetSource: void}) {

    return <>
        <div className={source?.url ? 'opened pop_up' : 'pop_up closed'}>
            <button onClick={resetSource}>X</button>
            {source?.url ? <video src={source?.url} controls autoPlay /> : null}
        </div>
    </>
};