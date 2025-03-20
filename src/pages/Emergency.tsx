import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertCircle, Phone, ShieldAlert, Crosshair, MapPin, HeartPulse, X, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const EmergencyPage = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);
  const [emergencyActive, setEmergencyActive] = useState(false);
  const [countdown, setCountdown] = useState(300); // 5-minute countdown

  // Geolocation tracking
  useEffect(() => {
    let watchId: number;
    
    if (emergencyActive) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          setLocation(position.coords);
          // Send location to emergency services
          updateEmergencyLocation(position.coords);
        },
        (error) => console.error('Geolocation error:', error),
        { enableHighAccuracy: true }
      );
    }

    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId);
    };
  }, [emergencyActive]);

  // Emergency countdown timer
  useEffect(() => {
    if (emergencyActive && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [emergencyActive, countdown]);

  const triggerEmergencyProtocol = async () => {
    if (window.confirm(
      '⚠️ Activate emergency protocol?\nThis will alert campus security and emergency services.'
    )) {
      setEmergencyActive(true);
      try {
        const response = await fetch('/api/emergency', {
          method: 'POST',
          body: JSON.stringify({
            coordinates: location,
            timestamp: new Date().toISOString()
          })
        });
        if (!response.ok) throw new Error('Emergency signal failed');
      } catch (error) {
        console.error('Emergency error:', error);
      }
    }
  };

  const updateEmergencyLocation = async (coords: GeolocationCoordinates) => {
    // Implement location update logic
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-red-50/30 dark:bg-red-900/10">
      <div className='fixed top-10 left-5'>
        <Link to="/" className="flex items-center text-lg text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to Home
        </Link>
      </div>
      <div className="container py-8 space-y-8">
        {/* Emergency Header */}
        <div className="text-center space-y-4">
          <AlertCircle className="w-16 h-16 text-red-600 mx-auto animate-pulse" />
          <h1 className="text-4xl font-bold">Emergency Assistance</h1>
          <p className="text-muted-foreground">
            Immediate support activated - help is on the way
          </p>
        </div>

        {/* Emergency Status */}
        {emergencyActive && (
          <Alert variant="destructive">
            <HeartPulse className="h-6 w-6" />
            <AlertTitle>Emergency Protocol Active</AlertTitle>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <Progress value={(300 - countdown) / 300 * 100} />
                <p className="mt-2 font-medium">
                  Estimated Response Time: {formatTime(countdown)}
                </p>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setEmergencyActive(false)}
                className="text-destructive"
              >
                <X className="mr-2 h-4 w-4" /> Cancel Emergency
              </Button>
            </div>
          </Alert>
        )}

        {/* Emergency Actions Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Immediate Contacts Card */}
          <Card className="border-red-200">
            <CardHeader className="pb-0">
              <div className="flex items-center gap-2">
                <ShieldAlert className="text-red-600" />
                <h2 className="text-2xl font-bold">Direct Contacts</h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <Button 
                variant="destructive" 
                className="w-full"
                onClick={() => window.open('tel:108')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Ambulance (108)
              </Button>
              
              <Button 
                variant="destructive" 
                className="w-full"
                onClick={() => window.open('tel:1800-XXX-XXXX')}
              >
                <Crosshair className="mr-2 h-5 w-5" />
                Campus Security
              </Button>
            </CardContent>
          </Card>

          {/* Location Sharing Card */}
          <Card className="border-red-200">
            <CardHeader className="pb-0">
              <div className="flex items-center gap-2">
                <MapPin className="text-red-600" />
                <h2 className="text-2xl font-bold">Location Sharing</h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              {location ? (
                <>
                  <Badge className="bg-green-100 text-green-800">
                    Sharing Live Location
                  </Badge>
                  <p className="text-sm">
                    Latitude: {location.latitude.toFixed(5)}
                    <br />
                    Longitude: {location.longitude.toFixed(5)}
                  </p>
                </>
              ) : (
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={triggerEmergencyProtocol}
                >
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Activate Emergency Protocol
                </Button>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Emergency Checklist */}
        <Card className="border-red-200">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-bold mb-4">Emergency Checklist</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Move to a safe location if possible</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Provide clear access path for responders</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>Gather any necessary medical information</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Timeline */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Response Timeline</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Badge variant="destructive">1</Badge>
              <div>
                <h3 className="font-medium">Emergency Signal Received</h3>
                <p className="text-muted-foreground text-sm">
                  {new Date().toLocaleTimeString()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 opacity-50">
              <Badge variant="outline">2</Badge>
              <div>
                <h3 className="font-medium">First Responders Dispatched</h3>
              </div>
            </div>
            <div className="flex items-center gap-4 opacity-50">
              <Badge variant="outline">3</Badge>
              <div>
                <h3 className="font-medium">Medical Team En Route</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPage;