import React, { useEffect } from 'react';
import AgoraRTC from 'agora-rtc-sdk';

const LiveStreaming = () => {
  useEffect(() => {
    const appId = '191e5b5592234cf9a2bd7e2e1d5133fa';
    const channelName = '05c43c05005849bd8249b5f1233ba24e';

    // Initialize Agora
    const client = AgoraRTC.createClient({ mode: 'live', codec: 'h264' });

    // Set up the client
    client.init(appId, () => {
      // Join the channel
      client.join(null, channelName, null, (uid) => {
        // Create a local stream
        const localStream = AgoraRTC.createStream({
          streamID: uid,
          audio: true,
          video: true,
        });

        // Initialize the local stream
        localStream.init(() => {
          // Publish the local stream to the channel
          client.publish(localStream);
        });

        // Listen for remote streams
        client.on('stream-added', (evt) => {
          const remoteStream = evt.stream;
          // Subscribe to the remote stream
          client.subscribe(remoteStream);
        });

        // Play remote streams
        client.on('stream-subscribed', (evt) => {
          const remoteStream = evt.stream;
          const remoteContainer = document.getElementById('remote-container');
          if (remoteContainer) {
            remoteStream.play(`remote-container-${remoteStream.getId()}`);
          }
        });
      });
    });

    // Cleanup when component unmounts
    return () => {
      // Unpublish and leave the channel
      client.unpublish();
      client.leave();
    };
  }, []);

  return (
    <div>
      <div id="remote-container">
        {/* Remote streams will be displayed here */}
      </div>
    </div>
  );
};

export default LiveStreaming;
