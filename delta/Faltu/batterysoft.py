import subprocess
import os

def compress_video(input_video_path, output_video_path, target_size_mb):
    # Convert MB to bits (1 MB = 8,000,000 bits)
    target_size_bits = target_size_mb * 8000000
    
    # Get video duration using ffmpeg
    result = subprocess.run(
        ['ffmpeg', '-i', input_video_path],
        stderr=subprocess.PIPE,
        stdout=subprocess.PIPE,
        text=True
    )
    duration_line = [x for x in result.stderr.split('\n') if 'Duration' in x][0]
    time_str = duration_line.split(',')[0].split('Duration:')[1].strip()
    h, m, s = time_str.split(':')
    duration_seconds = int(h) * 3600 + int(m) * 60 + float(s)
    
    # Calculate bitrate required to achieve the target size
    bitrate = (target_size_bits / duration_seconds)
    
    # Run ffmpeg command to compress the video with the calculated bitrate
    ffmpeg_command = [
        'ffmpeg', '-i', input_video_path, 
        '-b:v', str(int(bitrate)),  # Video bitrate
        '-y', output_video_path  # Overwrite output if exists
    ]
    
    subprocess.run(ffmpeg_command)
    print(f'Video compressed and saved to {output_video_path}')

# Example usage
input_video = r'F:\s.mkv'  # Full path to the input video
output_video = r'F:\s_compressed.mkv'  # Full path to save the compressed video
target_size = 999  # in MB

compress_video(input_video, output_video, target_size)
